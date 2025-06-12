using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    /// <inheritdoc />
    public partial class Deletesspid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Subjects_Specializations_SpecializationId",
                table: "Subjects");

            migrationBuilder.DropIndex(
                name: "IX_Subjects_SpecializationId",
                table: "Subjects");

            migrationBuilder.DropColumn(
                name: "SpecializationId",
                table: "Subjects");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "SpecializationId",
                table: "Subjects",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Subjects_SpecializationId",
                table: "Subjects",
                column: "SpecializationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Subjects_Specializations_SpecializationId",
                table: "Subjects",
                column: "SpecializationId",
                principalTable: "Specializations",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
