using DataBase.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using DataBase.Models;
namespace DataBaseCreator.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SignController : ControllerBase
    {

        Uses[] arr = new Uses[1000];
        int i = 0;

        private readonly AppDbContext _context;

        public SignController(AppDbContext context)
        {
            _context = context;
        }
        // GET: /Simple/{param1}/{param2}
        [HttpGet]
        public Uses[] Get()
        {

            return arr;
                        
        }

        [HttpGet("{param1}/{param2}")]
        public void Put(string param1, string param2)
        {
            arr[i].login = param1;
            arr[i].password = param2;
            i++;

        }
    }
}