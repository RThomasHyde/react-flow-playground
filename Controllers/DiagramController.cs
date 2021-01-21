using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReactCore.Models;

namespace ReactCore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiagramController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<DiagramController> _logger;

        public DiagramController(ILogger<DiagramController> logger)
        {
            _logger = logger;
        }

        [Route("{diagramId}")]
        [HttpGet]
        public Diagram Get(Guid diagramId)
        {
            return new Diagram();
        }
    }
}
