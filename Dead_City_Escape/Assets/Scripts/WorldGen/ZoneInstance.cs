// ---------------------------------------------------------------------------
// Dead City Escape - Zone Instance
// Stores runtime data for a generated zone including NavMeshData
// ---------------------------------------------------------------------------
using UnityEngine;
using UnityEngine.AI;

namespace DeadCityEscape.WorldGen
{
    /// <summary>
    /// Runtime instance of a generated zone, including the GameObject
    /// and baked NavMeshData for zombie pathfinding.
    /// </summary>
    public class ZoneInstance
    {
        /// <summary>
        /// The root GameObject containing all zone geometry.
        /// </summary>
        public GameObject ZoneObject { get; set; }

        /// <summary>
        /// Baked NavMeshData for this zone. Null if baking failed.
        /// </summary>
        public NavMeshData NavMeshData { get; set; }

        /// <summary>
        /// Handle returned by NavMesh.AddNavMeshData. Used to remove the data later.
        /// </summary>
        public NavMeshDataInstance NavMeshDataInstance { get; set; }

        /// <summary>
        /// Whether NavMesh baking succeeded for this zone.
        /// </summary>
        public bool HasValidNavMesh => NavMeshData != null;

        public ZoneInstance(GameObject zoneObject)
        {
            ZoneObject = zoneObject;
        }

        /// <summary>
        /// Clean up NavMeshData when the zone is destroyed.
        /// </summary>
        public void Cleanup()
        {
            if (NavMeshDataInstance.valid)
            {
                NavMesh.RemoveNavMeshData(NavMeshDataInstance);
            }

            if (NavMeshData != null)
            {
                Object.Destroy(NavMeshData);
                NavMeshData = null;
            }
        }
    }
}
