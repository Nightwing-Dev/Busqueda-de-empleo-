import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Jobs } from "../interfaces/jobs.interface"

@Injectable(
    { providedIn: 'root' }
)

export class PostulationsService {
    jobs: Jobs[] = [];

    private jobsSubject = new BehaviorSubject<Jobs[]>([]);

    get jobAction$(): Observable<Jobs[]> {
        return this.jobsSubject.asObservable();
    }

    private addJobs(jobs: Jobs): void {
        const isJobInBanner = this.jobs.find(({ title }) => title === jobs.title)

        if (isJobInBanner) {
            this.jobs.push({...jobs})

        } else {
            this.jobs.push({ ...jobs})
        }


        this.jobsSubject.next(this.jobs);
    }
}