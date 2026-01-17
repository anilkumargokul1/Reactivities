using Application.Activities.Commands;
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
            return await Mediator.Send(new GetActivityDetails.Query{Id=id});
        }
        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(Activity activity)
        {
            return await Mediator.Send(new CreateActivity.Commands{Activity= activity});
        }
        [HttpPut]
        public async Task<ActionResult<string>> EditActivity(Activity activity)
        {
            return await Mediator.Send(new EditActivity.Commands{Activity=activity});
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(string Id)
        {
            await Mediator.Send(new DeleteActivity.Command{Id=Id});
            return Ok();
        }
    }
}
