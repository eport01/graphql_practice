# frozen_string_literal: true

module Types
  class ChoreType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :difficulty_level, Integer
    field :time, Integer
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :users, [Types::UserType]
    field :users_count, Integer 

    def users_count 
      object.users.count 
    end
  end
end
