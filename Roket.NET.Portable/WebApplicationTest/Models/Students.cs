using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationTest.Models
{
    public class Students
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public static List<Students> GetStudentList
        {
            get
            {
                return new List<Students>()
                {
                    new Students { StudentID = 1, StudentName = "Muhammad Dimas" },
                    new Students { StudentID = 2, StudentName = "Muhammad Fauzi" },
                    new Students { StudentID = 3, StudentName = "Muhammad Roki" },
                    new Students { StudentID = 4, StudentName = "Muhammad Riko" },
                    new Students { StudentID = 5, StudentName = "Muhammad Derry" }
                };
            }
        }
           
        

        public static List<Students> GetStudentsLikeName(string namestring)
        {
            var item = GetStudentList.Where<Students>(value => value.StudentName.ToLower().StartsWith(namestring.ToLower()));

            return item.ToList();

        }
    }
}