// ---------------------------------------------------------------------------
// Dead City Escape - Zone Layout Generator Tests
// Validates procedural city generation: determinism, zones, POIs.
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class ZoneLayoutGeneratorTests
    {
        [Test]
        public void GeneratesCorrectNumberOfZones()
        {
            var rng = new SeededRNG(42);
            var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

            Assert.That(zones.Length,
                Is.EqualTo(ZoneLayoutGenerator.GridSize * ZoneLayoutGenerator.GridSize));
        }

        [Test]
        public void Deterministic_SameSeed()
        {
            var rng1 = new SeededRNG(100);
            var rng2 = new SeededRNG(100);

            var zones1 = ZoneLayoutGenerator.GenerateAllZones(rng1);
            var zones2 = ZoneLayoutGenerator.GenerateAllZones(rng2);

            for (int i = 0; i < zones1.Length; i++)
            {
                Assert.That(zones1[i].ZoneIndex, Is.EqualTo(zones2[i].ZoneIndex));
                Assert.That(zones1[i].Threat, Is.EqualTo(zones2[i].Threat));
                Assert.That(zones1[i].Buildings.Length,
                    Is.EqualTo(zones2[i].Buildings.Length));
            }
        }

        [Test]
        public void DifferentSeeds_DifferentLayouts()
        {
            var rng1 = new SeededRNG(1);
            var rng2 = new SeededRNG(2);

            var zones1 = ZoneLayoutGenerator.GenerateAllZones(rng1);
            var zones2 = ZoneLayoutGenerator.GenerateAllZones(rng2);

            // At least some buildings should differ
            bool anyDifference = false;
            for (int i = 0; i < zones1.Length; i++)
            {
                if (zones1[i].Buildings.Length != zones2[i].Buildings.Length)
                {
                    anyDifference = true;
                    break;
                }
            }
            Assert.That(anyDifference, Is.True);
        }

        [Test]
        public void AllZones_HaveBuildings()
        {
            var rng = new SeededRNG(42);
            var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

            foreach (var zone in zones)
                Assert.That(zone.Buildings.Length, Is.GreaterThan(0));
        }

        [Test]
        public void AllZones_HaveRoads()
        {
            var rng = new SeededRNG(42);
            var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

            foreach (var zone in zones)
                Assert.That(zone.Roads.Length, Is.GreaterThanOrEqualTo(2)); // 2-4 roads per zone
        }

        [Test]
        public void ZoneIndices_AreCorrect()
        {
            var rng = new SeededRNG(42);
            var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

            for (int i = 0; i < zones.Length; i++)
            {
                Assert.That(zones[i].ZoneIndex, Is.EqualTo(i));
                Assert.That(zones[i].GridX,
                    Is.EqualTo(i % ZoneLayoutGenerator.GridSize));
                Assert.That(zones[i].GridZ,
                    Is.EqualTo(i / ZoneLayoutGenerator.GridSize));
            }
        }

        [Test]
        public void Zone0_IsLowThreat()
        {
            var rng = new SeededRNG(42);
            var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

            // Zone 0 (top-left) must be Low threat as spawn zone
            Assert.That(zones[0].Threat, Is.EqualTo(ThreatLevel.Low));
        }

        [Test]
        public void RequiredPOIs_ArePlaced()
        {
            var rng = new SeededRNG(42);
            var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

            // Check that all required POIs are present somewhere
            var allPOIs = new HashSet<POIType>();
            foreach (var zone in zones)
            {
                foreach (var poi in zone.AssignedPOIs)
                {
                    allPOIs.Add(poi);
                }
            }

            Assert.That(allPOIs, Does.Contain(POIType.RadioTower));
            Assert.That(allPOIs, Does.Contain(POIType.ParkingGarage));
            Assert.That(allPOIs, Does.Contain(POIType.PoliceStation));
            Assert.That(allPOIs, Does.Contain(POIType.SewerAccess));
            Assert.That(allPOIs, Does.Contain(POIType.GasStation));
            Assert.That(allPOIs, Does.Contain(POIType.Hospital));
        }

        [Test]
        public void BuildingDimensions_AreValid()
        {
            var rng = new SeededRNG(42);
            var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

            foreach (var zone in zones)
            {
                foreach (var b in zone.Buildings)
                {
                    Assert.That(b.Width, Is.GreaterThan(0));
                    Assert.That(b.Depth, Is.GreaterThan(0));
                    Assert.That(b.Floors, Is.GreaterThan(0));
                    Assert.That(b.Floors, Is.LessThanOrEqualTo(6));
                }
            }
        }

        [Test]
        public void RoadDimensions_AreValid()
        {
            var rng = new SeededRNG(42);
            var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

            foreach (var zone in zones)
            {
                foreach (var r in zone.Roads)
                {
                    Assert.That(r.Width, Is.GreaterThan(0));
                    float length = MathF.Sqrt(
                        MathF.Pow(r.EndX - r.StartX, 2) +
                        MathF.Pow(r.EndZ - r.StartZ, 2));
                    Assert.That(length, Is.GreaterThan(0));
                }
            }
        }

        [Test]
        public void GridConstants_AreCorrect()
        {
            Assert.That(ZoneLayoutGenerator.GridSize, Is.EqualTo(4));
            Assert.That(ZoneLayoutGenerator.ZoneWorldSize, Is.EqualTo(100f));
        }
    }
}
