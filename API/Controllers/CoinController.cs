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
    [Route("api/[controller]")]
    public class CoinController : ControllerBase
    {
        private readonly DataContext _dbContext;

        public CoinController(DataContext context)
        {
            _dbContext = context;
        }
        [HttpGet]
        public async Task<List<Coins>> GetCoinList()
        {
            List<Coins> coinsList = new List<Coins>();
            List<Coins> userCoins = new List<Coins>();

            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://trade.cointree.com/api/prices/aud/"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    coinsList = JsonConvert.DeserializeObject<List<Coins>>(apiResponse);
                }
            }
            userCoins = _dbContext.Coins.ToList();
            
            //To check which of the coins user already bought
            if (userCoins != null)
            {
                foreach (var x in userCoins)
                {
                    var itemToChange = coinsList.First(d => d.buy == x.buy).Id = x.Id;
                }

            }



            return coinsList;
        }

        [HttpGet("{coinsymbol}", Name = "GetCoin")]
        public async Task<Coins> GetCoin(string coinsymbol)
        {
            Coins coin = new Coins();
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://trade.cointree.com/api/prices/aud/" + coinsymbol))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    coin = JsonConvert.DeserializeObject<Coins>(apiResponse);
                }
            }

            return coin;

        }

    }
}