import { Quaternion, Vec3 } from "cannon-es";
import { Vector3, Quaternion as ThreeQuaternion, Box3, Object3D } from "three";

export function convertCannonEsVector(vector: Vec3): Vector3 {
  return vector as unknown as Vector3;
}

export function convertCannonEsQuaternion(
  quaternion: Quaternion
): ThreeQuaternion {
  return quaternion as unknown as ThreeQuaternion;
}

export function convertThreeVector(vector: Vector3): Vec3 {
  return vector as unknown as Vec3;
}

export function convertThreeQuaternion(
  quaternion: ThreeQuaternion
): Quaternion {
  return quaternion as unknown as Quaternion;
}

export function centerMiddle(object3D: Object3D): void {
  new Box3()
    .setFromObject(object3D)
    .getCenter(object3D.position)
    .multiplyScalar(-1);
}
