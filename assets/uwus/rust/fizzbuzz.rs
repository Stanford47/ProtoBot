fn main() {
    let mut i: i8 = 0;

    loop {
        if i % 15 == 0 {
            println!("FizzBuzz");
        } else if i % 3 == 0 {
            println!("Fizz");
        } else if i % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", i);
        }

        i += 1;

        if i >= 101 {
            break;
        }
    }
}