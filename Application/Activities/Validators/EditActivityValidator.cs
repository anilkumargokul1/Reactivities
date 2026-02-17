using System;
using System.Security.Cryptography.X509Certificates;
using Application.Activities.Commands;
using Application.Activities.DTO;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditActivityValidator : BaseActivityValidator<EditActivity.Commands, EditActivityDto>
{
    public EditActivityValidator() : base(x=>x.ActivityDto)
    {
        RuleFor(x=>x.ActivityDto.Id).NotEmpty().WithMessage("Activity id is required");
    }
}
