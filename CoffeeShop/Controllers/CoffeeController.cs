using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using CoffeeShop.Models;
using CoffeeShop.Repositories;

namespace CoffeeShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeController : ControllerBase
    {
        private readonly CoffeeRepository _coffeeRepository;
        public CoffeeController(IConfiguration configuration)
        {
            _coffeeRepository = new CoffeeRepository(configuration);
        }

        // https://localhost:44315/api/beantype
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_coffeeRepository.GetAll());
        }

        // https://localhost:5001/api/beantype/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var type = _coffeeRepository.Get(id);
            if (type == null)
            {
                return NotFound();
            }
            return Ok(type);
        }

        // https://localhost:5001/api/beantype/
        [HttpPost]
        public IActionResult Post(Coffee coffee)
        {
            _coffeeRepository.Add(coffee);
            return CreatedAtAction("Get", new { id = coffee.Id }, coffee);
        }

        // https://localhost:5001/api/beantype/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Coffee coffee)
        {
            if (id != coffee.Id)
            {
                return BadRequest();
            }

            _coffeeRepository.Update(coffee);
            return NoContent();
        }

        // https://localhost:5001/api/beantype/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _coffeeRepository.Delete(id);
            return NoContent();
        }
    }
}