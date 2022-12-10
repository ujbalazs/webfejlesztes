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

@Entity('note')
export class Note extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

	@Column()
	text: string;

    @OneToMany(() => Priority, (priority) => priority.note)
    priorities: Priority[]

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[]

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

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

@Entity('priority')
export class Priority extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

	@Column()
	name: string;

    @ManyToOne(() => Note, (note) => note.priorities)
    note: Note

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}