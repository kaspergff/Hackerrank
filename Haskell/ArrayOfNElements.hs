
fn 0 = []
fn n = [1] : fn (n-1)

main = do
n <- readLn :: IO Int
print (fn(n))