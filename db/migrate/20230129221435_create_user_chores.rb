class CreateUserChores < ActiveRecord::Migration[5.2]
  def change
    create_table :user_chores do |t|
      t.references :user, foreign_key: true
      t.references :chore, foreign_key: true

      t.timestamps
    end
  end
end
