module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser 
    field :create_chore, mutation: Mutations::CreateChore
  end
end
