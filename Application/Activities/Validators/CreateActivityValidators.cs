using System;
using Application.Activities.Commands;
using Application.Activities.DTO;
using FluentValidation;

namespace Application.Activities.Validators;

public class CreateActivityValidators:BaseActivityValidator<CreateActivity.Commands,CreateActivityDto>
{
    public CreateActivityValidators():base(x=>x.Activitydto)
    {
        
    }

}
