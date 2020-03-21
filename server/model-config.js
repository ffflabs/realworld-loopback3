module.exports = {
  _meta: {
    sources: [
      'loopback/common/models',
      'loopback/server/models',
      '../common/models',
      './models'
    ],
    mixins: [
      'loopback/common/mixins',
      'loopback/server/mixins',
      '../common/mixins',
      './mixins'
    ]
  },

  LoginUser: {
    dataSource: 'db',
    public: false
  },
  LoginUserRequest: {
    dataSource: 'db',
    public: false
  },
  NewUser: {
    dataSource: 'db',
    public: false
  },
  NewUserRequest: {
    dataSource: 'db',
    public: false
  },
  user: {
    dataSource: 'db',
    public: true
  },
  UserResponse: {
    dataSource: 'db',
    public: false
  },
  UpdateUser: {
    dataSource: 'db',
    public: false
  },
  UpdateUserRequest: {
    dataSource: 'db',
    public: false
  },
  ProfileResponse: {
    dataSource: 'db',
    public: false
  },
  Profile: {
    dataSource: 'db',
    public: true
  },
  Article: {
    dataSource: 'db',
    public: true
  },
  SingleArticleResponse: {
    dataSource: 'db',
    public: false
  },
  MultipleArticlesResponse: {
    dataSource: 'db',
    public: false
  },
  NewArticle: {
    dataSource: 'db',
    public: false
  },
  NewArticleRequest: {
    dataSource: 'db',
    public: false
  },
  UpdateArticle: {
    dataSource: 'db',
    public: false
  },
  UpdateArticleRequest: {
    dataSource: 'db',
    public: false
  },
  Comment: {
    dataSource: 'db',
    public: true
  },
  SingleCommentResponse: {
    dataSource: 'db',
    public: false
  },
  MultipleCommentsResponse: {
    dataSource: 'db',
    public: false
  },
  NewComment: {
    dataSource: 'db',
    public: false
  },
  NewCommentRequest: {
    dataSource: 'db',
    public: false
  },
  TagsResponse: {
    dataSource: 'db',
    public: false
  },
  GenericErrorModel: {
    dataSource: 'db',
    public: false
  },
  user_and_Authentication: {
    dataSource: 'db',
    public: false
  },
  Articles: {
    dataSource: 'db',
    public: true
  },
  Comments: {
    dataSource: 'db',
    public: false
  },
  Favorites: {
    dataSource: 'db',
    public: true
  },
  SwaggerModel: {
    dataSource: 'db',
    public: false
  }
};
