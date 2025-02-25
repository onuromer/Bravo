﻿#nullable disable

namespace Sqlbi.Bravo.Infrastructure.Contracts.PBICloud
{
    using System.Collections.Generic;

    public class GlobalServiceEnvironmentService
    {
        public string Name { get; set; }

        public string Endpoint { get; set; }

        public string ResourceId { get; set; }

        public IEnumerable<string> AllowedDomains { get; set; }

        public string AppId { get; set; }

        public string RedirectUri { get; set; }
    }
}
