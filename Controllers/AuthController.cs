using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ReactCore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private enum ValidationResult 
        {
            Valid,
            BadUsername,
            BadPassword
        }
        private readonly ILogger<DiagramController> _logger;

        public AuthController(ILogger<DiagramController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Authenticate(AuthRequest model)
        {
            var auth = IsValidUser(model.Username, model.Password);
            return Ok(auth.ToString());
        }

        private ValidationResult IsValidUser(string username, string password)
        {
            if (!username.Equals("admin", System.StringComparison.InvariantCultureIgnoreCase))
                return ValidationResult.BadUsername;
            if (!password.Equals("admin"))
                return ValidationResult.BadPassword;
            return ValidationResult.Valid;
        }
    }
}