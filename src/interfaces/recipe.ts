export interface Recipe {
  _id: {
    $oid: string;
  };
  title: string;
  area: string;
  instructions: string;
  description: string;
  thumb: string;
  preview: string;
  time: string;
  youtube: string;

  createdAt: {
    $date: {
      $numberLong: string;
    };
  };
  updatedAt: {
    $date: {
      $numberLong: string;
    };
  };
  ingredients: {
    id: {
      $oid: string;
    };
    measure: string;
  }[];
  favorite: boolean;
}
export interface Ingredients {
  _id: {
    $oid: string;
  };
  ttl: string;
  desc: string;
  t: string;
  thb: string;
}
