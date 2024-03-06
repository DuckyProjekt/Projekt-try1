using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JWTTokenAPI.Migrations
{
    public partial class migrationv3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Ratings",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LikedMovieIdId",
                table: "Ratings",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Favourites",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "LikedMovieIdId",
                table: "Favourites",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_ApplicationUserId",
                table: "Ratings",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_LikedMovieIdId",
                table: "Ratings",
                column: "LikedMovieIdId");

            migrationBuilder.CreateIndex(
                name: "IX_Favourites_LikedMovieIdId",
                table: "Favourites",
                column: "LikedMovieIdId");

            migrationBuilder.CreateIndex(
                name: "IX_Favourites_UserId",
                table: "Favourites",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Favourites_AspNetUsers_UserId",
                table: "Favourites",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Favourites_LikedMovieIds_LikedMovieIdId",
                table: "Favourites",
                column: "LikedMovieIdId",
                principalTable: "LikedMovieIds",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_AspNetUsers_ApplicationUserId",
                table: "Ratings",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_LikedMovieIds_LikedMovieIdId",
                table: "Ratings",
                column: "LikedMovieIdId",
                principalTable: "LikedMovieIds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favourites_AspNetUsers_UserId",
                table: "Favourites");

            migrationBuilder.DropForeignKey(
                name: "FK_Favourites_LikedMovieIds_LikedMovieIdId",
                table: "Favourites");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_AspNetUsers_ApplicationUserId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_LikedMovieIds_LikedMovieIdId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_ApplicationUserId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_LikedMovieIdId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Favourites_LikedMovieIdId",
                table: "Favourites");

            migrationBuilder.DropIndex(
                name: "IX_Favourites_UserId",
                table: "Favourites");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "LikedMovieIdId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "LikedMovieIdId",
                table: "Favourites");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Favourites",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
