class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.datetime :last_done
      t.integer :interval

      t.timestamps
    end
  end
end
