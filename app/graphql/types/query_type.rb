module Types
  class QueryType < Types::BaseObject
    # /users 
    field :users, [Types::UserType], null: false 

    def users 
      User.all 
    end

    field :user, Types::UserType, null: false do 
      argument :id, ID, required: true 
    end

    def user(id:)
      User.find(id)
    end
    field :chores, [Types::ChoreType], null: false 

    def chores 
      User.all 
    end

    field :chore, Types::ChoreType, null: false do 
      argument :id, ID, required: true 
    end

    def chore(id:)
      Chore.find(id)
    end
    

  end
end
