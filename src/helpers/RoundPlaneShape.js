import * as THREE from "three";
import { Shape, ShapeGeometry } from "three";

export const roundedRectShape = new THREE.Shape();

(function roundedRect(ctx, x, y, width, height, radius) {
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
})(roundedRectShape, 0, 0, 2, 5, 0.2);

export class RoundedPlaneShape extends Shape {
  constructor(x = 0, y = 0, width = 2, height = 5, radius = 0.2) {
    super();

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;

    this.draw();
  }

  setHeight(height) {
    this.height = height;
    this.draw();
  }

  setWidth(width) {
    this.width = width;
    this.draw();
  }

  draw() {
    this.moveTo(this.x, this.y + this.radius);
    this.lineTo(this.x, this.y + this.height - this.radius);
    this.quadraticCurveTo(
      this.x,
      this.y + this.height,
      this.x + this.radius,
      this.y + this.height
    );
    this.lineTo(this.x + this.width - this.radius, this.y + this.height);
    this.quadraticCurveTo(
      this.x + this.width,
      this.y + this.height,
      this.x + this.width,
      this.y + this.height - this.radius
    );
    this.lineTo(this.x + this.width, this.y + this.radius);
    this.quadraticCurveTo(
      this.x + this.width,
      this.y,
      this.x + this.width - this.radius,
      this.y
    );
    this.lineTo(this.x + this.radius, this.y);
    this.quadraticCurveTo(this.x, this.y, this.x, this.y + this.radius);
  }
}
