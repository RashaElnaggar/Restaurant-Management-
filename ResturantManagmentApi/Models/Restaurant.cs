using System;
using System.Collections.Generic;

namespace ResturantManagmentApi.Models;

public partial class Restaurant
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int CityId { get; set; }

    public string? Address { get; set; }

    public string? Phone { get; set; }

    public virtual City City { get; set; } = null!;

    public virtual ICollection<MenuItem> MenuItems { get; set; } = new List<MenuItem>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
