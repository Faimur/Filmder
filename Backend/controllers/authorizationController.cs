using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("[controller]")]
public class authorizationController : ControllerBase
{

    [HttpGet("{login}/{password}/{secondPassword}")]
        public String SignUp(string login, string password, string secondPassword)
        {
            Console.WriteLine("Method SignUp:\n" + "\tlogin:" + login + "\n\tpassword: " + password + "\n\trepeatPassword: " + secondPassword + "\n");
            
            if (password == secondPassword)
            {
                // Предположим, что пароль сохранен в БД
                return "Вы успешно зарегистрировались!";
            }
            else
            {
                return "Пароли должны совпадать.";
            }
        }

    [HttpGet("{login}/{password}")]
        public String SignIn(string login, string password)
        {
            Console.WriteLine("Method SignIn:\n" + "\tlogin:" + login + "\n\tpassword: " + password + "\n");
            
            return "Вы вошли";
        }
}