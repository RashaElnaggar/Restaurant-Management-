using System;
using System.Collections.Generic;

namespace ResturantManagmentApi.Models;

public partial class MenuItem
{
    public int Id { get; set; }

    public int RestaurantId { get; set; }

    public string? Name { get; set; }

    public decimal? Price { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual Restaurant Restaurant { get; set; } = null!;
}
