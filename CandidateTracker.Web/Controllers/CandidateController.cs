using CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.AddCandidate(candidate);
        }


        [HttpGet]
        [Route("getpending")]
        public List<Candidate> GetPending()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetAllPending();
        }

        [HttpGet]
        [Route("getconfirmed")]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetAllConfirmed();
        }

        [HttpGet]
        [Route("getDeclined")]
        public List<Candidate> GetDeclined()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetAllDeclined();
        }

    

        [HttpPost]
        [Route("update")]
        public void Update(Candidate candidate)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.Update(candidate);
        }

        [HttpGet]
        [Route("viewone")]
        public Candidate ViewOne(int id)
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.ViewOne(id);
        }

        [HttpGet("getpendingcount")]
        public object GetPendingCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return new { count = repo.GetPendingCount() };
        }
        [HttpGet("getconfirmedcount")]
        public object GetConfirmedCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return new { count = repo.GetConfirmedCount() };
        }

        [HttpGet("getdeclinedcount")]
        public object GetDeclinedCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return new { count = repo.GetDeclinedCount() };
        }


    }

}
