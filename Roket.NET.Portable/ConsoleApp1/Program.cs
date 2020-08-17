using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            string salt = Roket.NET.Cryptography.GetSalt(25);
            Console.WriteLine(salt);

            Console.ReadLine();

        }
    }
}
