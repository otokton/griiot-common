export enum LinkType {
  /**
   *  Normal embedded nothing change
   */
  ONE_TO_ONE_EMBEDDED = 'ONE_TO_ONE_EMBEDDED',
  /**
   *  you have an object with an attribute which is a  list of object
   *  example a project has a list of object images (img, widht, height, pixel)
   *  then you create a new Object images {img, widht, height, pixel, project_id} project_id is  a link attribute
   */
  ONE_TO_MANY_EMBEDDED = 'ONE_TO_MANY_EMBEDDED',
  /**
   *  in you collection you have multiple rows which have the same items object
   *  example project has many rows with the reference of the same category {name, volume, numberOf}
   *  create a new collection of category and add a refrence in project  {category_id}
   */
  ONE_TO_MANY_REFERENCE = 'ONE_TO_MANY_REFERENCE'
}
