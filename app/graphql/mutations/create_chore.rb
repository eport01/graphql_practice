class Mutations::CreateChore < Mutations::BaseMutation 
  argument :name, String, required: true 
  argument :difficulty_level, Integer, required: true 
  argument :time, Integer, required: true 

  field :chore, Types::ChoreType, null: false 
  field :errors, [String], null: false 

  def resolve(name:, difficulty_level:, time:)
    chore = Chore.new(name: name, difficulty_level: difficulty_level, time: time)

    if chore.save 
      {
        chore: chore, 
        errors: []
      }
    else 
      {
        chore: nil, 
        errors: chore.errors.full_messages
      }
    end
  end
end