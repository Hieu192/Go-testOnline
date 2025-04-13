import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true })
    registrationNumber: string | null;

    @Column({ type: 'float', nullable: true })
    math: number | null;

    @Column({ type: 'float', nullable: true })
    literature: number | null;

    @Column({ type: 'float', nullable: true })
    foreignLanguage: number | null;

    @Column({ type: 'float', nullable: true })
    physics: number | null;

    @Column({ type: 'float', nullable: true })
    chemistry: number | null;

    @Column({ type: 'float', nullable: true })
    biology: number | null;

    @Column({ type: 'float', nullable: true })
    history: number | null;

    @Column({ type: 'float', nullable: true })
    geography: number | null;

    @Column({ type: 'float', nullable: true })
    civicEducation: number | null;

    @Column()
    foreignLanguageCode: string;
}