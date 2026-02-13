import { Group } from "three";

function setupNavigationAreaGeometry() {
    // Empty anchor group used for marker-relative transforms.
    const navigationArea = new Group();

    // navigation area parent for easier placement
    const navigationAreaParent = new Group();
    navigationAreaParent.add(navigationArea);

    return navigationAreaParent;
}

export { setupNavigationAreaGeometry };
