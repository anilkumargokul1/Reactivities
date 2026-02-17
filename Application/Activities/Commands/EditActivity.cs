using System;
using System.Security.Cryptography.X509Certificates;
using Domain;
using MediatR;
using Persistence;
using AutoMapper;
using Application.Core;
using Application.Activities.DTO;
namespace Application.Activities.Commands;

public class EditActivity
{
    public class Commands:IRequest<Result<Unit>>
    {
        public required EditActivityDto ActivityDto { get; set; }
    }
    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Commands, Result<Unit>>
    {
        public async Task<Result<Unit>> Handle(Commands request, CancellationToken cancellationToken)
        {
            var activity= await context.Activities.FindAsync([request.ActivityDto.Id],cancellationToken); 
            if(activity==null) return Result<Unit>.Failure("Activity not found", 404);
            mapper.Map(request.ActivityDto,activity);
            var result= await context.SaveChangesAsync(cancellationToken)>0;
            if(!result) return Result<Unit>.Failure("Failed to Update the Activity", 400);
            return Result<Unit>.Success(Unit.Value);
        }
    }
}
