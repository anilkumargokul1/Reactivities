using Application.Activities.Commands;
using Application.Activities.DTO;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new GetActivityList.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivityDetail(string id)
        {
            return HandleResult(await Mediator.Send(new GetActivityDetails.Query{Id=id}));
        }
        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(CreateActivityDto activitydto)
        {
            return HandleResult(await Mediator.Send(new CreateActivity.Commands{Activitydto= activitydto}));
        }
        [HttpPut]
        public async Task<ActionResult> EditActivity(EditActivityDto activity)
        {
            return HandleResult(await Mediator.Send(new EditActivity.Commands{ActivityDto=activity}));
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(string Id)
        {
            return HandleResult(await Mediator.Send(new DeleteActivity.Command{Id=Id}));
        }
    }
}
