using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidateRepo
    {
        private string _connectionString;

        public CandidateRepo(string cs)
        {
            _connectionString = cs;
        }

        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public List<Candidate> GetAllPending()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }
        public List<Candidate> GetAllConfirmed()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }
        public List<Candidate> GetAllDeclined()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Declined).ToList();
        }

        public void Update(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();
        }

        public Candidate ViewOne(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public int GetPendingCount()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).Count();
        }
        public int GetConfirmedCount()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).Count();
        }
        public int GetDeclinedCount()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Declined).Count();
        }

    }
}
