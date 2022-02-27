export interface Movie {
  id: number;
  attributes: {
    title: string;
    release_date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    uid: string;
    poster: {
      data: {
        id: number;
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
          };
          url: string;
        };
      };
    };
    actors: {
      data: [
        {
          id: 1;
          attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            actor_name: string;
          };
        }
      ];
    };
  };
}
