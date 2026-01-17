using System;
using System.Security.Cryptography.X509Certificates;
using Domain;
using MediatR;
using Persistence;
using AutoMapper;
namespace Application.Activities.Commands;

public class EditActivity
{
    public class Commands:IRequest<string>
    {
        public required Activity Activity { get; set; }
    }
    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Commands, string>
    {
        public async Task<string> Handle(Commands request, CancellationToken cancellationToken)
        {
            var activity= await context.Activities.FindAsync([request.Activity.Id],cancellationToken) ?? 
            throw new Exception("Edited activity is not found");
            
            mapper.Map(request.Activity,activity);
            await context.SaveChangesAsync(cancellationToken);
            return "Activity update Successfully.";
        }
    }
}
