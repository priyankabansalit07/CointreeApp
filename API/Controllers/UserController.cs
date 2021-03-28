using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Data;
using API.Models;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _dbContext;

        public UserController(DataContext context)
        {
            _dbContext = context;
        }



        //Get selected Coin from Database
        [HttpGet]
        public async Task<IEnumerable<Coins>> GetSelectedCoins()
        {
            return await _dbContext.Coins.ToListAsync();
        }


        [HttpPost]
        public async Task<IActionResult> AddCoin(Coins coin)
        {
            await _dbContext.Coins.AddAsync(coin);
            await _dbContext.SaveChangesAsync();
            return Ok(new
            {
                coin
            });
        }
    }
}