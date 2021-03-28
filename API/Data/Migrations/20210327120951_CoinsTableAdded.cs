using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class CoinsTableAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Coins",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    sell = table.Column<string>(nullable: true),
                    buy = table.Column<string>(nullable: true),
                    ask = table.Column<double>(nullable: false),
                    bid = table.Column<double>(nullable: false),
                    rate = table.Column<double>(nullable: false),
                    spotRate = table.Column<double>(nullable: false),
                    market = table.Column<string>(nullable: true),
                    timestamp = table.Column<DateTime>(nullable: false),
                    rateType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coins", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Coins");
        }
    }
}
