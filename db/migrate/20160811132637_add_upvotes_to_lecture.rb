class AddUpvotesToLecture < ActiveRecord::Migration
  def change
    add_column :lectures, :upvotes, :integer
  end
end
