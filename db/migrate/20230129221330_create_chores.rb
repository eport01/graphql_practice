class CreateChores < ActiveRecord::Migration[5.2]
  def change
    create_table :chores do |t|
      t.string :name
      t.integer :difficulty_level
      t.integer :time

      t.timestamps
    end
  end
end
