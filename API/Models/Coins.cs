using System;
namespace API.Models
{
    public class Coins
    {
        public int Id{get;set;}
        public string sell { get; set; }
        public string buy { get; set; }
        public double ask { get; set; }
        public double bid { get; set; }
        public double rate { get; set; }
        public double spotRate { get; set; }
        public string market { get; set; }
        public DateTime timestamp { get; set; }
        public string rateType { get; set; }

    }
}