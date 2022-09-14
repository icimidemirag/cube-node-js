cube(`Tweets`, {
  sql: `SELECT * FROM twitter.tweets`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [createdAt, id, idStr, inReplyToScreenName, inReplyToStatusIdStr, inReplyToUserIdStr, placeCountry, placeCountryCode, placeFullName, placeId, placeName, retweetedStatusCreatedAt, retweetedStatusIdStr, retweetedStatusInReplyToScreenName, retweetedStatusInReplyToStatusIdStr, retweetedStatusInReplyToUserIdStr, retweetedStatusPlaceCountry, retweetedStatusPlaceCountryCode, retweetedStatusPlaceFullName, retweetedStatusPlaceId, retweetedStatusPlaceName, retweetedStatusUserCreatedAt, retweetedStatusUserIdStr, retweetedStatusUserName, retweetedStatusUserProfileSidebarBorderColor, retweetedStatusUserProfileSidebarFillColor, retweetedStatusUserScreenName, userCreatedAt, userIdStr, userName, userProfileSidebarBorderColor, userProfileSidebarFillColor, userScreenName]
    },
    
    favoriteCount: {
      sql: `favorite_count`,
      type: `sum`
    },
    
    retweetCount: {
      sql: `retweet_count`,
      type: `sum`
    },
    
    retweetedStatusFavoriteCount: {
      sql: `${CUBE}.\`retweeted_status.favorite_count\``,
      type: `sum`,
      title: `Retweeted Status.favorite Count`
    },
    
    retweetedStatusRetweetCount: {
      sql: `${CUBE}.\`retweeted_status.retweet_count\``,
      type: `sum`,
      title: `Retweeted Status.retweet Count`
    },
    
    retweetedStatusUserFavouritesCount: {
      sql: `${CUBE}.\`retweeted_status.user.favourites_count\``,
      type: `sum`,
      title: `Retweeted Status.user.favourites Count`
    },
    
    retweetedStatusUserFollowersCount: {
      sql: `${CUBE}.\`retweeted_status.user.followers_count\``,
      type: `sum`,
      title: `Retweeted Status.user.followers Count`
    },
    
    retweetedStatusUserFriendsCount: {
      sql: `${CUBE}.\`retweeted_status.user.friends_count\``,
      type: `sum`,
      title: `Retweeted Status.user.friends Count`
    },
    
    retweetedStatusUserListedCount: {
      sql: `${CUBE}.\`retweeted_status.user.listed_count\``,
      type: `sum`,
      title: `Retweeted Status.user.listed Count`
    },
    
    retweetedStatusUserStatusesCount: {
      sql: `${CUBE}.\`retweeted_status.user.statuses_count\``,
      type: `sum`,
      title: `Retweeted Status.user.statuses Count`
    },
    
    userFavouritesCount: {
      sql: `${CUBE}.\`user.favourites_count\``,
      type: `sum`,
      title: `User.favourites Count`
    },
    
    userFollowersCount: {
      sql: `${CUBE}.\`user.followers_count\``,
      type: `sum`,
      title: `User.followers Count`
    },
    
    userFriendsCount: {
      sql: `${CUBE}.\`user.friends_count\``,
      type: `sum`,
      title: `User.friends Count`
    },
    
    userListedCount: {
      sql: `${CUBE}.\`user.listed_count\``,
      type: `sum`,
      title: `User.listed Count`
    },
    
    userStatusesCount: {
      sql: `${CUBE}.\`user.statuses_count\``,
      type: `sum`,
      title: `User.statuses Count`
    }
  },
  
  dimensions: {
    contributors: {
      sql: `contributors`,
      type: `string`
    },
    
    coordinates: {
      sql: `coordinates`,
      type: `string`
    },
    
    coordinatesType: {
      sql: `${CUBE}.\`coordinates.type\``,
      type: `string`,
      title: `Coordinates.type`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `string`
    },
    
    geo: {
      sql: `geo`,
      type: `string`
    },
    
    geoType: {
      sql: `${CUBE}.\`geo.type\``,
      type: `string`,
      title: `Geo.type`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    idStr: {
      sql: `id_str`,
      type: `string`
    },
    
    inReplyToScreenName: {
      sql: `in_reply_to_screen_name`,
      type: `string`
    },
    
    inReplyToStatusIdStr: {
      sql: `in_reply_to_status_id_str`,
      type: `string`
    },
    
    inReplyToUserIdStr: {
      sql: `in_reply_to_user_id_str`,
      type: `string`
    },
    
    lang: {
      sql: `lang`,
      type: `string`
    },
    
    place: {
      sql: `place`,
      type: `string`
    },
    
    placeBoundingBoxType: {
      sql: `${CUBE}.\`place.bounding_box.type\``,
      type: `string`,
      title: `Place.bounding Box.type`
    },
    
    placeCountry: {
      sql: `${CUBE}.\`place.country\``,
      type: `string`,
      title: `Place.country`
    },
    
    placeCountryCode: {
      sql: `${CUBE}.\`place.country_code\``,
      type: `string`,
      title: `Place.country Code`
    },
    
    placeFullName: {
      sql: `${CUBE}.\`place.full_name\``,
      type: `string`,
      title: `Place.full Name`
    },
    
    placeId: {
      sql: `${CUBE}.\`place.id\``,
      type: `string`,
      title: `Place.id`
    },
    
    placeName: {
      sql: `${CUBE}.\`place.name\``,
      type: `string`,
      title: `Place.name`
    },
    
    placePlaceType: {
      sql: `${CUBE}.\`place.place_type\``,
      type: `string`,
      title: `Place.place Type`
    },
    
    placeUrl: {
      sql: `${CUBE}.\`place.url\``,
      type: `string`,
      title: `Place.url`
    },
    
    retweetedStatusContributors: {
      sql: `${CUBE}.\`retweeted_status.contributors\``,
      type: `string`,
      title: `Retweeted Status.contributors`
    },
    
    retweetedStatusCoordinates: {
      sql: `${CUBE}.\`retweeted_status.coordinates\``,
      type: `string`,
      title: `Retweeted Status.coordinates`
    },
    
    retweetedStatusCoordinatesType: {
      sql: `${CUBE}.\`retweeted_status.coordinates.type\``,
      type: `string`,
      title: `Retweeted Status.coordinates.type`
    },
    
    retweetedStatusCreatedAt: {
      sql: `${CUBE}.\`retweeted_status.created_at\``,
      type: `string`,
      title: `Retweeted Status.created at`
    },
    
    retweetedStatusGeo: {
      sql: `${CUBE}.\`retweeted_status.geo\``,
      type: `string`,
      title: `Retweeted Status.geo`
    },
    
    retweetedStatusGeoType: {
      sql: `${CUBE}.\`retweeted_status.geo.type\``,
      type: `string`,
      title: `Retweeted Status.geo.type`
    },
    
    retweetedStatusIdStr: {
      sql: `${CUBE}.\`retweeted_status.id_str\``,
      type: `string`,
      title: `Retweeted Status.id Str`
    },
    
    retweetedStatusInReplyToScreenName: {
      sql: `${CUBE}.\`retweeted_status.in_reply_to_screen_name\``,
      type: `string`,
      title: `Retweeted Status.in Reply to Screen Name`
    },
    
    retweetedStatusInReplyToStatusIdStr: {
      sql: `${CUBE}.\`retweeted_status.in_reply_to_status_id_str\``,
      type: `string`,
      title: `Retweeted Status.in Reply to Status Id Str`
    },
    
    retweetedStatusInReplyToUserIdStr: {
      sql: `${CUBE}.\`retweeted_status.in_reply_to_user_id_str\``,
      type: `string`,
      title: `Retweeted Status.in Reply to User Id Str`
    },
    
    retweetedStatusLang: {
      sql: `${CUBE}.\`retweeted_status.lang\``,
      type: `string`,
      title: `Retweeted Status.lang`
    },
    
    retweetedStatusPlace: {
      sql: `${CUBE}.\`retweeted_status.place\``,
      type: `string`,
      title: `Retweeted Status.place`
    },
    
    retweetedStatusPlaceBoundingBoxType: {
      sql: `${CUBE}.\`retweeted_status.place.bounding_box.type\``,
      type: `string`,
      title: `Retweeted Status.place.bounding Box.type`
    },
    
    retweetedStatusPlaceCountry: {
      sql: `${CUBE}.\`retweeted_status.place.country\``,
      type: `string`,
      title: `Retweeted Status.place.country`
    },
    
    retweetedStatusPlaceCountryCode: {
      sql: `${CUBE}.\`retweeted_status.place.country_code\``,
      type: `string`,
      title: `Retweeted Status.place.country Code`
    },
    
    retweetedStatusPlaceFullName: {
      sql: `${CUBE}.\`retweeted_status.place.full_name\``,
      type: `string`,
      title: `Retweeted Status.place.full Name`
    },
    
    retweetedStatusPlaceId: {
      sql: `${CUBE}.\`retweeted_status.place.id\``,
      type: `string`,
      title: `Retweeted Status.place.id`
    },
    
    retweetedStatusPlaceName: {
      sql: `${CUBE}.\`retweeted_status.place.name\``,
      type: `string`,
      title: `Retweeted Status.place.name`
    },
    
    retweetedStatusPlacePlaceType: {
      sql: `${CUBE}.\`retweeted_status.place.place_type\``,
      type: `string`,
      title: `Retweeted Status.place.place Type`
    },
    
    retweetedStatusPlaceUrl: {
      sql: `${CUBE}.\`retweeted_status.place.url\``,
      type: `string`,
      title: `Retweeted Status.place.url`
    },
    
    retweetedStatusSource: {
      sql: `${CUBE}.\`retweeted_status.source\``,
      type: `string`,
      title: `Retweeted Status.source`
    },
    
    retweetedStatusText: {
      sql: `${CUBE}.\`retweeted_status.text\``,
      type: `string`,
      title: `Retweeted Status.text`
    },
    
    retweetedStatusUserCreatedAt: {
      sql: `${CUBE}.\`retweeted_status.user.created_at\``,
      type: `string`,
      title: `Retweeted Status.user.created at`
    },
    
    retweetedStatusUserDescription: {
      sql: `${CUBE}.\`retweeted_status.user.description\``,
      type: `string`,
      title: `Retweeted Status.user.description`
    },
    
    retweetedStatusUserIdStr: {
      sql: `${CUBE}.\`retweeted_status.user.id_str\``,
      type: `string`,
      title: `Retweeted Status.user.id Str`
    },
    
    retweetedStatusUserLang: {
      sql: `${CUBE}.\`retweeted_status.user.lang\``,
      type: `string`,
      title: `Retweeted Status.user.lang`
    },
    
    retweetedStatusUserLocation: {
      sql: `${CUBE}.\`retweeted_status.user.location\``,
      type: `string`,
      title: `Retweeted Status.user.location`
    },
    
    retweetedStatusUserName: {
      sql: `${CUBE}.\`retweeted_status.user.name\``,
      type: `string`,
      title: `Retweeted Status.user.name`
    },
    
    retweetedStatusUserProfileBackgroundColor: {
      sql: `${CUBE}.\`retweeted_status.user.profile_background_color\``,
      type: `string`,
      title: `Retweeted Status.user.profile Background Color`
    },
    
    retweetedStatusUserProfileBackgroundImageUrl: {
      sql: `${CUBE}.\`retweeted_status.user.profile_background_image_url\``,
      type: `string`,
      title: `Retweeted Status.user.profile Background Image Url`
    },
    
    retweetedStatusUserProfileBackgroundImageUrlHttps: {
      sql: `${CUBE}.\`retweeted_status.user.profile_background_image_url_https\``,
      type: `string`,
      title: `Retweeted Status.user.profile Background Image Url Https`
    },
    
    retweetedStatusUserProfileBannerUrl: {
      sql: `${CUBE}.\`retweeted_status.user.profile_banner_url\``,
      type: `string`,
      title: `Retweeted Status.user.profile Banner Url`
    },
    
    retweetedStatusUserProfileImageUrl: {
      sql: `${CUBE}.\`retweeted_status.user.profile_image_url\``,
      type: `string`,
      title: `Retweeted Status.user.profile Image Url`
    },
    
    retweetedStatusUserProfileImageUrlHttps: {
      sql: `${CUBE}.\`retweeted_status.user.profile_image_url_https\``,
      type: `string`,
      title: `Retweeted Status.user.profile Image Url Https`
    },
    
    retweetedStatusUserProfileLinkColor: {
      sql: `${CUBE}.\`retweeted_status.user.profile_link_color\``,
      type: `string`,
      title: `Retweeted Status.user.profile Link Color`
    },
    
    retweetedStatusUserProfileLocation: {
      sql: `${CUBE}.\`retweeted_status.user.profile_location\``,
      type: `string`,
      title: `Retweeted Status.user.profile Location`
    },
    
    retweetedStatusUserProfileSidebarBorderColor: {
      sql: `${CUBE}.\`retweeted_status.user.profile_sidebar_border_color\``,
      type: `string`,
      title: `Retweeted Status.user.profile Sidebar Border Color`
    },
    
    retweetedStatusUserProfileSidebarFillColor: {
      sql: `${CUBE}.\`retweeted_status.user.profile_sidebar_fill_color\``,
      type: `string`,
      title: `Retweeted Status.user.profile Sidebar Fill Color`
    },
    
    retweetedStatusUserProfileTextColor: {
      sql: `${CUBE}.\`retweeted_status.user.profile_text_color\``,
      type: `string`,
      title: `Retweeted Status.user.profile Text Color`
    },
    
    retweetedStatusUserScreenName: {
      sql: `${CUBE}.\`retweeted_status.user.screen_name\``,
      type: `string`,
      title: `Retweeted Status.user.screen Name`
    },
    
    retweetedStatusUserTimeZone: {
      sql: `${CUBE}.\`retweeted_status.user.time_zone\``,
      type: `string`,
      title: `Retweeted Status.user.time Zone`
    },
    
    retweetedStatusUserUrl: {
      sql: `${CUBE}.\`retweeted_status.user.url\``,
      type: `string`,
      title: `Retweeted Status.user.url`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    text: {
      sql: `text`,
      type: `string`
    },
    
    userCreatedAt: {
      sql: `${CUBE}.\`user.created_at\``,
      type: `string`,
      title: `User.created at`
    },
    
    userDescription: {
      sql: `${CUBE}.\`user.description\``,
      type: `string`,
      title: `User.description`
    },
    
    userIdStr: {
      sql: `${CUBE}.\`user.id_str\``,
      type: `string`,
      title: `User.id Str`
    },
    
    userLang: {
      sql: `${CUBE}.\`user.lang\``,
      type: `string`,
      title: `User.lang`
    },
    
    userLocation: {
      sql: `${CUBE}.\`user.location\``,
      type: `string`,
      title: `User.location`
    },
    
    userName: {
      sql: `${CUBE}.\`user.name\``,
      type: `string`,
      title: `User.name`
    },
    
    userProfileBackgroundColor: {
      sql: `${CUBE}.\`user.profile_background_color\``,
      type: `string`,
      title: `User.profile Background Color`
    },
    
    userProfileBackgroundImageUrl: {
      sql: `${CUBE}.\`user.profile_background_image_url\``,
      type: `string`,
      title: `User.profile Background Image Url`
    },
    
    userProfileBackgroundImageUrlHttps: {
      sql: `${CUBE}.\`user.profile_background_image_url_https\``,
      type: `string`,
      title: `User.profile Background Image Url Https`
    },
    
    userProfileBannerUrl: {
      sql: `${CUBE}.\`user.profile_banner_url\``,
      type: `string`,
      title: `User.profile Banner Url`
    },
    
    userProfileImageUrl: {
      sql: `${CUBE}.\`user.profile_image_url\``,
      type: `string`,
      title: `User.profile Image Url`
    },
    
    userProfileImageUrlHttps: {
      sql: `${CUBE}.\`user.profile_image_url_https\``,
      type: `string`,
      title: `User.profile Image Url Https`
    },
    
    userProfileLinkColor: {
      sql: `${CUBE}.\`user.profile_link_color\``,
      type: `string`,
      title: `User.profile Link Color`
    },
    
    userProfileLocation: {
      sql: `${CUBE}.\`user.profile_location\``,
      type: `string`,
      title: `User.profile Location`
    },
    
    userProfileSidebarBorderColor: {
      sql: `${CUBE}.\`user.profile_sidebar_border_color\``,
      type: `string`,
      title: `User.profile Sidebar Border Color`
    },
    
    userProfileSidebarFillColor: {
      sql: `${CUBE}.\`user.profile_sidebar_fill_color\``,
      type: `string`,
      title: `User.profile Sidebar Fill Color`
    },
    
    userProfileTextColor: {
      sql: `${CUBE}.\`user.profile_text_color\``,
      type: `string`,
      title: `User.profile Text Color`
    },
    
    userScreenName: {
      sql: `${CUBE}.\`user.screen_name\``,
      type: `string`,
      title: `User.screen Name`
    },
    
    userTimeZone: {
      sql: `${CUBE}.\`user.time_zone\``,
      type: `string`,
      title: `User.time Zone`
    },
    
    userUrl: {
      sql: `${CUBE}.\`user.url\``,
      type: `string`,
      title: `User.url`
    }
  },
  
  dataSource: `default`
});
