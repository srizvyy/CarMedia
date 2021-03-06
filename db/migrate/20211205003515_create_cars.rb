class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.references :owned_by, foreign_key: {to_table: "users"}
      t.references :photographed_by, foreign_key: {to_table: "users"}
      t.string :photo
      t.string :description
      t.string :model
      t.integer :year

      t.timestamps
    end
  end
end
