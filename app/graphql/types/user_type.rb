# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String
    field :name, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :posts, [Types::PostType] 
    field :chores, [Types::ChoreType] 

    field :posts_count, Integer 
    field :chores_count, Integer 


    def posts_count 
      object.posts.count
    end

    def chores_count 
      object.chores.count 
    end
  end
end
