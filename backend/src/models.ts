import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToMany,
	JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
    BaseEntity,
} from 'typeorm';

@Entity('priority')
export class Priority extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

	@Column()
	name: string;

    @OneToMany(() => Note, (note) => note.priority)
    notes: Note[]

	@Column()
	user_id: string;

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

@Entity('note')
export class Note extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

	@Column()
	text: string;

	@ManyToOne(() => Priority, (priority) => priority.notes , {
		cascade: true,
		onDelete: 'CASCADE',
		onUpdate:'CASCADE'
	  })
    priority: Priority


    @ManyToMany(() => Category, {cascade: true})
    @JoinTable()
    categories: Category[]

	@Column()
	user_id: string;

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

@Entity('category')
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

	@Column()
	name: string;

	@Column()
	user_id: string;

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

	@Column()
	name: string;

	@Column()
	password: string;

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

