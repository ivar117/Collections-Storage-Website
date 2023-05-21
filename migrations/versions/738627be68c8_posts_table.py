"""posts table

Revision ID: 738627be68c8
Revises: 9d1ec620da3b
Create Date: 2023-05-19 00:13:50.917955

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '738627be68c8'
down_revision = '9d1ec620da3b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('post_content', schema=None) as batch_op:
        batch_op.drop_index('ix_post_content_title')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('post_content', schema=None) as batch_op:
        batch_op.create_index('ix_post_content_title', ['title'], unique=False)

    # ### end Alembic commands ###