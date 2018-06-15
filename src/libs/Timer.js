// @flow

export default class Timer {

    _timer: any;
    _args: any[];
    _callback: Function;
    _delay: number;
    _start: Date;
    _done: boolean = false;

    /**
     *
     * @param callback
     * @param delay
     * @param args
     */
    constructor(callback: Function, delay: number, ...args: any[]): void {
        this._callback = callback;
        this._delay = delay;
        this._args = args;
    }

    /**
     *
     * @return {Timer}
     */
    clear(): Timer {
        clearTimeout(this._timer);

        return this;
    }

    /**
     *
     * @return {Timer}
     */
    pause(): Timer {
        this.clear();
        this._delay -= new Date() - this._start;

        return this;
    }

    /**
     *
     * @return {Timer}
     */
    resume(): Timer {
        this.clear();
        this._run();

        return this;
    }

    /**
     *
     * @return {Timer}
     */
    start(): Timer {
        this._done = false;
        this._run();

        return this;
    }

    /**
     *
     * @return {boolean}
     */
    done(): boolean {
        return this._done;
    }

    /**
     *
     * @private
     */
    _run(): void {
        this._start = new Date();
        this._timer = setTimeout(() => {
            this._callback(this._args);
            this.clear();
            this._done = true;
        }, this._delay);
    }
}

