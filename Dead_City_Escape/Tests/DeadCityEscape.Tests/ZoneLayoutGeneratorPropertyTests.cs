// ---------------------------------------------------------------------------
// Dead City Escape - Zone Layout Generator Property-Based Tests
// Validates correctness properties with randomized inputs (500 iterations).
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;
using System.Text.Json;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class ZoneLayoutGeneratorPropertyTests
    {
        private const int Iterations = 500;
        private readonly Random _rand = new(42);

        private int RandomSeed() => _rand.Next(int.MinValue, int.MaxValue);

        // Property 2: ZoneLayoutGenerator Determinism
        [Test]
        [Category("Property:2")]
        public void Property2_ZoneLayoutGenerator_Determinism()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int seed = RandomSeed();
                var rng1 = new SeededRNG(seed);
                var rng2 = new SeededRNG(seed);

                var zones1 = ZoneLayoutGenerator.GenerateAllZones(rng1);
                var zones2 = ZoneLayoutGenerator.GenerateAllZones(rng2);

                Assert.That(zones1.Length, Is.EqualTo(zones2.Length),
                    $"Seed {seed}: zone count mismatch");

                for (int i = 0; i < zones1.Length; i++)
                {
                    Assert.That(zones1[i].ZoneIndex, Is.EqualTo(zones2[i].ZoneIndex),
                        $"Seed {seed}, zone {i}: ZoneIndex mismatch");
                    Assert.That(zones1[i].GridX, Is.EqualTo(zones2[i].GridX),
                        $"Seed {seed}, zone {i}: GridX mismatch");
                    Assert.That(zones1[i].GridZ, Is.EqualTo(zones2[i].GridZ),
                        $"Seed {seed}, zone {i}: GridZ mismatch");
                    Assert.That(zones1[i].Threat, Is.EqualTo(zones2[i].Threat),
                        $"Seed {seed}, zone {i}: Threat mismatch");
                    Assert.That(zones1[i].AssignedPOIs, Is.EqualTo(zones2[i].AssignedPOIs),
                        $"Seed {seed}, zone {i}: AssignedPOIs mismatch");
                    Assert.That(zones1[i].Buildings.Length, Is.EqualTo(zones2[i].Buildings.Length),
                        $"Seed {seed}, zone {i}: Buildings count mismatch");
                    Assert.That(zones1[i].Roads.Length, Is.EqualTo(zones2[i].Roads.Length),
                        $"Seed {seed}, zone {i}: Roads count mismatch");
                }
            }
        }

        // Property 3: Zone Grid Structural Invariant
        [Test]
        [Category("Property:3")]
        public void Property3_ZoneGrid_StructuralInvariant()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int seed = RandomSeed();
                var rng = new SeededRNG(seed);
                var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

                Assert.That(zones.Length, Is.EqualTo(16),
                    $"Seed {seed}: must generate exactly 16 zones");

                var indices = zones.Select(z => z.ZoneIndex).OrderBy(x => x).ToArray();
                Assert.That(indices, Is.EqualTo(Enumerable.Range(0, 16).ToArray()),
                    $"Seed {seed}: ZoneIndex must cover 0-15");

                foreach (var zone in zones)
                {
                    Assert.That(zone.GridX, Is.InRange(0, 3),
                        $"Seed {seed}, zone {zone.ZoneIndex}: GridX out of range");
                    Assert.That(zone.GridZ, Is.InRange(0, 3),
                        $"Seed {seed}, zone {zone.ZoneIndex}: GridZ out of range");
                }
            }
        }

        // Property 5: ZoneLayoutData Serialization Round-Trip
        [Test]
        [Category("Property:5")]
        public void Property5_ZoneLayoutData_SerializationRoundTrip()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int seed = RandomSeed();
                var rng = new SeededRNG(seed);
                var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

                var options = new JsonSerializerOptions { IncludeFields = true };
                var json = JsonSerializer.Serialize(zones, options);
                var deserialized = JsonSerializer.Deserialize<ZoneLayoutData[]>(json, options);

                Assert.That(deserialized, Is.Not.Null,
                    $"Seed {seed}: deserialization returned null");
                Assert.That(deserialized!.Length, Is.EqualTo(zones.Length),
                    $"Seed {seed}: deserialized zone count mismatch");

                for (int i = 0; i < zones.Length; i++)
                {
                    Assert.That(deserialized[i].ZoneIndex, Is.EqualTo(zones[i].ZoneIndex),
                        $"Seed {seed}, zone {i}: ZoneIndex round-trip mismatch");
                    Assert.That(deserialized[i].GridX, Is.EqualTo(zones[i].GridX),
                        $"Seed {seed}, zone {i}: GridX round-trip mismatch");
                    Assert.That(deserialized[i].GridZ, Is.EqualTo(zones[i].GridZ),
                        $"Seed {seed}, zone {i}: GridZ round-trip mismatch");
                    Assert.That(deserialized[i].Threat, Is.EqualTo(zones[i].Threat),
                        $"Seed {seed}, zone {i}: Threat round-trip mismatch");
                    // Handle null vs empty array after JSON deserialization
                    var originalPOIs = zones[i].AssignedPOIs ?? Array.Empty<POIType>();
                    var deserializedPOIs = deserialized[i].AssignedPOIs ?? Array.Empty<POIType>();
                    Assert.That(deserializedPOIs, Is.EqualTo(originalPOIs),
                        $"Seed {seed}, zone {i}: AssignedPOIs round-trip mismatch");
                }
            }
        }

        // Property 6: Required POI Types Always Present
        [Test]
        [Category("Property:6")]
        public void Property6_RequiredPOITypes_AlwaysPresent()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int seed = RandomSeed();
                var rng = new SeededRNG(seed);
                var zones = ZoneLayoutGenerator.GenerateAllZones(rng);

                var requiredPOIs = new[]
                {
                    POIType.RadioTower,
                    POIType.ParkingGarage,
                    POIType.PoliceStation,
                    POIType.SewerAccess,
                    POIType.GasStation,
                    POIType.Hospital
                };

                var allPOIs = zones.SelectMany(z => z.AssignedPOIs).ToHashSet();

                foreach (var required in requiredPOIs)
                {
                    Assert.That(allPOIs.Contains(required), Is.True,
                        $"Seed {seed}: required POI {required} not found in any zone");
                }
            }
        }
    }
}
