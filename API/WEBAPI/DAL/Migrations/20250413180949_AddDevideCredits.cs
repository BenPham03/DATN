using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    /// <inheritdoc />
    public partial class AddDevideCredits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Credits",
                table: "Subjects",
                newName: "TheoryCredits");

            migrationBuilder.AddColumn<int>(
                name: "PracticeCredits",
                table: "Subjects",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PracticeCredits",
                table: "Subjects");

            migrationBuilder.RenameColumn(
                name: "TheoryCredits",
                table: "Subjects",
                newName: "Credits");
        }
    }
}
